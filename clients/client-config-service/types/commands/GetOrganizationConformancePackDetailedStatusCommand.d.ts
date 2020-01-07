import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetOrganizationConformancePackDetailedStatusRequest, GetOrganizationConformancePackDetailedStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOrganizationConformancePackDetailedStatusCommandInput = GetOrganizationConformancePackDetailedStatusRequest;
export declare type GetOrganizationConformancePackDetailedStatusCommandOutput = GetOrganizationConformancePackDetailedStatusResponse & __MetadataBearer;
export declare class GetOrganizationConformancePackDetailedStatusCommand extends $Command<GetOrganizationConformancePackDetailedStatusCommandInput, GetOrganizationConformancePackDetailedStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetOrganizationConformancePackDetailedStatusCommandInput;
    constructor(input: GetOrganizationConformancePackDetailedStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOrganizationConformancePackDetailedStatusCommandInput, GetOrganizationConformancePackDetailedStatusCommandOutput>;
    private serialize;
    private deserialize;
}
