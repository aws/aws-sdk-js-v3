import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { RequestServiceQuotaIncreaseRequest, RequestServiceQuotaIncreaseResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RequestServiceQuotaIncreaseCommandInput = RequestServiceQuotaIncreaseRequest;
export declare type RequestServiceQuotaIncreaseCommandOutput = RequestServiceQuotaIncreaseResponse & __MetadataBearer;
export declare class RequestServiceQuotaIncreaseCommand extends $Command<RequestServiceQuotaIncreaseCommandInput, RequestServiceQuotaIncreaseCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: RequestServiceQuotaIncreaseCommandInput;
    constructor(input: RequestServiceQuotaIncreaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RequestServiceQuotaIncreaseCommandInput, RequestServiceQuotaIncreaseCommandOutput>;
    private serialize;
    private deserialize;
}
