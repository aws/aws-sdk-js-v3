import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetCredentialReportResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCredentialReportCommandInput = {};
export declare type GetCredentialReportCommandOutput = GetCredentialReportResponse & __MetadataBearer;
export declare class GetCredentialReportCommand extends $Command<GetCredentialReportCommandInput, GetCredentialReportCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetCredentialReportCommandInput;
    constructor(input: GetCredentialReportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCredentialReportCommandInput, GetCredentialReportCommandOutput>;
    private serialize;
    private deserialize;
}
