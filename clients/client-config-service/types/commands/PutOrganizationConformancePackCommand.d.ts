import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutOrganizationConformancePackRequest, PutOrganizationConformancePackResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutOrganizationConformancePackCommandInput = PutOrganizationConformancePackRequest;
export declare type PutOrganizationConformancePackCommandOutput = PutOrganizationConformancePackResponse & __MetadataBearer;
export declare class PutOrganizationConformancePackCommand extends $Command<PutOrganizationConformancePackCommandInput, PutOrganizationConformancePackCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutOrganizationConformancePackCommandInput;
    constructor(input: PutOrganizationConformancePackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutOrganizationConformancePackCommandInput, PutOrganizationConformancePackCommandOutput>;
    private serialize;
    private deserialize;
}
