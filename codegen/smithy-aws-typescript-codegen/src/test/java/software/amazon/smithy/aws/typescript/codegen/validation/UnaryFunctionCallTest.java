package software.amazon.smithy.aws.typescript.codegen.validation;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class UnaryFunctionCallTest {
    @Test
    void check() {
        assertEquals(false, UnaryFunctionCall.check(""));
        assertEquals(false, UnaryFunctionCall.check("5"));
        assertEquals(false, UnaryFunctionCall.check("(param)"));
        assertEquals(false, UnaryFunctionCall.check("x[5]"));
        assertEquals(false, UnaryFunctionCall.check("new Date(timestamp)"));
        assertEquals(false, UnaryFunctionCall.check("x(y(_))"));
        assertEquals(false, UnaryFunctionCall.check("call(param).prop"));
        assertEquals(false, UnaryFunctionCall.check("call(param, param2)"));

        assertEquals(true, UnaryFunctionCall.check("_"));
        assertEquals(true, UnaryFunctionCall.check("x()"));
        assertEquals(true, UnaryFunctionCall.check("x(_)"));
        assertEquals(true, UnaryFunctionCall.check("long_function_name(long_parameter_name)"));
        assertEquals(true, UnaryFunctionCall.check("container.function(param)"));
        assertEquals(true, UnaryFunctionCall.check("factory(param)(param2)"));
    }

    @Test
    void toRef() {
        assertEquals("_", UnaryFunctionCall.toRef("_"));
        assertEquals("x", UnaryFunctionCall.toRef("x()"));
        assertEquals("x", UnaryFunctionCall.toRef("x(_)"));
        assertEquals("long_function_name", UnaryFunctionCall.toRef("long_function_name(long_parameter_name)"));
        assertEquals("container.function", UnaryFunctionCall.toRef("container.function(param)"));
        assertEquals("factory(param)", UnaryFunctionCall.toRef("factory(param)(param2)"));
    }
}