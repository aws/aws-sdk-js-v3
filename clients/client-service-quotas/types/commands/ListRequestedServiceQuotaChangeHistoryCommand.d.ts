import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListRequestedServiceQuotaChangeHistoryRequest, ListRequestedServiceQuotaChangeHistoryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRequestedServiceQuotaChangeHistoryCommandInput = ListRequestedServiceQuotaChangeHistoryRequest;
export declare type ListRequestedServiceQuotaChangeHistoryCommandOutput = ListRequestedServiceQuotaChangeHistoryResponse & __MetadataBearer;
export declare class ListRequestedServiceQuotaChangeHistoryCommand extends $Command<ListRequestedServiceQuotaChangeHistoryCommandInput, ListRequestedServiceQuotaChangeHistoryCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: ListRequestedServiceQuotaChangeHistoryCommandInput;
    constructor(input: ListRequestedServiceQuotaChangeHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRequestedServiceQuotaChangeHistoryCommandInput, ListRequestedServiceQuotaChangeHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
