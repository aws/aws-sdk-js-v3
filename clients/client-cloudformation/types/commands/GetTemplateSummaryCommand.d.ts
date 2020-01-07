import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { GetTemplateSummaryInput, GetTemplateSummaryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTemplateSummaryCommandInput = GetTemplateSummaryInput;
export declare type GetTemplateSummaryCommandOutput = GetTemplateSummaryOutput & __MetadataBearer;
export declare class GetTemplateSummaryCommand extends $Command<GetTemplateSummaryCommandInput, GetTemplateSummaryCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: GetTemplateSummaryCommandInput;
    constructor(input: GetTemplateSummaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTemplateSummaryCommandInput, GetTemplateSummaryCommandOutput>;
    private serialize;
    private deserialize;
}
