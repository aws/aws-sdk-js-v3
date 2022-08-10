package software.amazon.smithy.aws.typescript.codegen;

public class AwsSdkErrorHeaderProvider implements ErrorHeaderProvider {
    @Override
    public String getErrorHeader() {
        return "x-amzn-errortype";
    }
}
