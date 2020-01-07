import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListServiceQuotasRequest, ListServiceQuotasResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListServiceQuotasCommandInput = ListServiceQuotasRequest;
export declare type ListServiceQuotasCommandOutput = ListServiceQuotasResponse & __MetadataBearer;
export declare class ListServiceQuotasCommand extends $Command<ListServiceQuotasCommandInput, ListServiceQuotasCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: ListServiceQuotasCommandInput;
    constructor(input: ListServiceQuotasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServiceQuotasCommandInput, ListServiceQuotasCommandOutput>;
    private serialize;
    private deserialize;
}
