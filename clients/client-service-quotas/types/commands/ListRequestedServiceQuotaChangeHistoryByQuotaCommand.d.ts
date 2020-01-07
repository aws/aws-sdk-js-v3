import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListRequestedServiceQuotaChangeHistoryByQuotaRequest, ListRequestedServiceQuotaChangeHistoryByQuotaResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput = ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
export declare type ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput = ListRequestedServiceQuotaChangeHistoryByQuotaResponse & __MetadataBearer;
export declare class ListRequestedServiceQuotaChangeHistoryByQuotaCommand extends $Command<ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput;
    constructor(input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput>;
    private serialize;
    private deserialize;
}
