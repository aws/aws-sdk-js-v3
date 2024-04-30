package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.endpointsV2.OmitEndpointParams;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
public class AddOmittedEndpointParams implements TypeScriptIntegration {

    private static final Set<String> OMITTED_PARAMS = new HashSet<>();

    static {
        OMITTED_PARAMS.add("AccountId");
    }

    @Override
    public void customize(TypeScriptCodegenContext codegenContext) {
        setParamForOmission();
    }

    private void setParamForOmission() {
        OmitEndpointParams.addOmittedParams(OMITTED_PARAMS);
    }
}