package software.amazon.smithy.aws.typescript.codegen;

import software.amazon.smithy.utils.IoUtils;

public class JsonErrorCodeStubGenerator {
    public static String getStub(final Class<?> c) {
        return String.format(IoUtils.readUtf8Resource(c, "load-json-error-code-stub.ts"), ResolvedErrorHeaderProvider.getSingletonInstance().getErrorHeader());
    }
}
