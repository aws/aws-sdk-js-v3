import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListServicesRequest, ListServicesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListServicesCommandInput = ListServicesRequest;
export declare type ListServicesCommandOutput = ListServicesResponse & __MetadataBearer;
export declare class ListServicesCommand extends $Command<ListServicesCommandInput, ListServicesCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: ListServicesCommandInput;
    constructor(input: ListServicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServicesCommandInput, ListServicesCommandOutput>;
    private serialize;
    private deserialize;
}
