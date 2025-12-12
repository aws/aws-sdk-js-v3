package software.amazon.smithy.aws.typescript.codegen.propertyaccess;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class PropertyAccessorTest {

    @Test
    void getFrom() {
        assertEquals("output.fileSystemId", PropertyAccessor.getFrom("output", "fileSystemId"));
        assertEquals("output.__fileSystemId", PropertyAccessor.getFrom("output", "__fileSystemId"));
    }

    @Test
    void getFromQuoted() {
        assertEquals("output[\"0fileSystemId\"]", PropertyAccessor.getFrom("output", "0fileSystemId"));
        assertEquals("output[\"file-system-id\"]", PropertyAccessor.getFrom("output", "file-system-id"));
    }

    @Test
    void getFromExtraQuoted() {
        assertEquals("output[`file\"system\"id`]", PropertyAccessor.getFrom("output", "file\"system\"id"));
    }
}
