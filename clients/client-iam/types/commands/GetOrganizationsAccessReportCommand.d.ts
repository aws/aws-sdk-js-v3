import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetOrganizationsAccessReportRequest, GetOrganizationsAccessReportResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOrganizationsAccessReportCommandInput = GetOrganizationsAccessReportRequest;
export declare type GetOrganizationsAccessReportCommandOutput = GetOrganizationsAccessReportResponse & __MetadataBearer;
export declare class GetOrganizationsAccessReportCommand extends $Command<GetOrganizationsAccessReportCommandInput, GetOrganizationsAccessReportCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetOrganizationsAccessReportCommandInput;
    constructor(input: GetOrganizationsAccessReportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOrganizationsAccessReportCommandInput, GetOrganizationsAccessReportCommandOutput>;
    private serialize;
    private deserialize;
}
