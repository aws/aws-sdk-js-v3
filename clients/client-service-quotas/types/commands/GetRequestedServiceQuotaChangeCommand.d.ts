import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { GetRequestedServiceQuotaChangeRequest, GetRequestedServiceQuotaChangeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRequestedServiceQuotaChangeCommandInput = GetRequestedServiceQuotaChangeRequest;
export declare type GetRequestedServiceQuotaChangeCommandOutput = GetRequestedServiceQuotaChangeResponse & __MetadataBearer;
export declare class GetRequestedServiceQuotaChangeCommand extends $Command<GetRequestedServiceQuotaChangeCommandInput, GetRequestedServiceQuotaChangeCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: GetRequestedServiceQuotaChangeCommandInput;
    constructor(input: GetRequestedServiceQuotaChangeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRequestedServiceQuotaChangeCommandInput, GetRequestedServiceQuotaChangeCommandOutput>;
    private serialize;
    private deserialize;
}
