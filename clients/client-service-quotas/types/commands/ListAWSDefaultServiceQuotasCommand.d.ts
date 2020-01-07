import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListAWSDefaultServiceQuotasRequest, ListAWSDefaultServiceQuotasResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAWSDefaultServiceQuotasCommandInput = ListAWSDefaultServiceQuotasRequest;
export declare type ListAWSDefaultServiceQuotasCommandOutput = ListAWSDefaultServiceQuotasResponse & __MetadataBearer;
export declare class ListAWSDefaultServiceQuotasCommand extends $Command<ListAWSDefaultServiceQuotasCommandInput, ListAWSDefaultServiceQuotasCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: ListAWSDefaultServiceQuotasCommandInput;
    constructor(input: ListAWSDefaultServiceQuotasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAWSDefaultServiceQuotasCommandInput, ListAWSDefaultServiceQuotasCommandOutput>;
    private serialize;
    private deserialize;
}
