import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GenerateOrganizationsAccessReportRequest, GenerateOrganizationsAccessReportResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GenerateOrganizationsAccessReportCommandInput = GenerateOrganizationsAccessReportRequest;
export declare type GenerateOrganizationsAccessReportCommandOutput = GenerateOrganizationsAccessReportResponse & __MetadataBearer;
export declare class GenerateOrganizationsAccessReportCommand extends $Command<GenerateOrganizationsAccessReportCommandInput, GenerateOrganizationsAccessReportCommandOutput, IAMClientResolvedConfig> {
    readonly input: GenerateOrganizationsAccessReportCommandInput;
    constructor(input: GenerateOrganizationsAccessReportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateOrganizationsAccessReportCommandInput, GenerateOrganizationsAccessReportCommandOutput>;
    private serialize;
    private deserialize;
}
