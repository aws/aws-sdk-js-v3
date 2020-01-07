import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { GetServiceQuotaRequest, GetServiceQuotaResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetServiceQuotaCommandInput = GetServiceQuotaRequest;
export declare type GetServiceQuotaCommandOutput = GetServiceQuotaResponse & __MetadataBearer;
export declare class GetServiceQuotaCommand extends $Command<GetServiceQuotaCommandInput, GetServiceQuotaCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: GetServiceQuotaCommandInput;
    constructor(input: GetServiceQuotaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceQuotaCommandInput, GetServiceQuotaCommandOutput>;
    private serialize;
    private deserialize;
}
