import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutThirdPartyJobFailureResultInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutThirdPartyJobFailureResultCommandInput = PutThirdPartyJobFailureResultInput;
export declare type PutThirdPartyJobFailureResultCommandOutput = __MetadataBearer;
export declare class PutThirdPartyJobFailureResultCommand extends $Command<PutThirdPartyJobFailureResultCommandInput, PutThirdPartyJobFailureResultCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutThirdPartyJobFailureResultCommandInput;
    constructor(input: PutThirdPartyJobFailureResultCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutThirdPartyJobFailureResultCommandInput, PutThirdPartyJobFailureResultCommandOutput>;
    private serialize;
    private deserialize;
}
