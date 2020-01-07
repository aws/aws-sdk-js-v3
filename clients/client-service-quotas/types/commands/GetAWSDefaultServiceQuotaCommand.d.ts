import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { GetAWSDefaultServiceQuotaRequest, GetAWSDefaultServiceQuotaResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAWSDefaultServiceQuotaCommandInput = GetAWSDefaultServiceQuotaRequest;
export declare type GetAWSDefaultServiceQuotaCommandOutput = GetAWSDefaultServiceQuotaResponse & __MetadataBearer;
export declare class GetAWSDefaultServiceQuotaCommand extends $Command<GetAWSDefaultServiceQuotaCommandInput, GetAWSDefaultServiceQuotaCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: GetAWSDefaultServiceQuotaCommandInput;
    constructor(input: GetAWSDefaultServiceQuotaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAWSDefaultServiceQuotaCommandInput, GetAWSDefaultServiceQuotaCommandOutput>;
    private serialize;
    private deserialize;
}
