import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { GetThirdPartyJobDetailsInput, GetThirdPartyJobDetailsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetThirdPartyJobDetailsCommandInput = GetThirdPartyJobDetailsInput;
export declare type GetThirdPartyJobDetailsCommandOutput = GetThirdPartyJobDetailsOutput & __MetadataBearer;
export declare class GetThirdPartyJobDetailsCommand extends $Command<GetThirdPartyJobDetailsCommandInput, GetThirdPartyJobDetailsCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: GetThirdPartyJobDetailsCommandInput;
    constructor(input: GetThirdPartyJobDetailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetThirdPartyJobDetailsCommandInput, GetThirdPartyJobDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
