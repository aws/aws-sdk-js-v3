import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { AcknowledgeThirdPartyJobInput, AcknowledgeThirdPartyJobOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcknowledgeThirdPartyJobCommandInput = AcknowledgeThirdPartyJobInput;
export declare type AcknowledgeThirdPartyJobCommandOutput = AcknowledgeThirdPartyJobOutput & __MetadataBearer;
export declare class AcknowledgeThirdPartyJobCommand extends $Command<AcknowledgeThirdPartyJobCommandInput, AcknowledgeThirdPartyJobCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: AcknowledgeThirdPartyJobCommandInput;
    constructor(input: AcknowledgeThirdPartyJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcknowledgeThirdPartyJobCommandInput, AcknowledgeThirdPartyJobCommandOutput>;
    private serialize;
    private deserialize;
}
