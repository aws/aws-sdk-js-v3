import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { ListLunaClientsRequest, ListLunaClientsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLunaClientsCommandInput = ListLunaClientsRequest;
export declare type ListLunaClientsCommandOutput = ListLunaClientsResponse & __MetadataBearer;
export declare class ListLunaClientsCommand extends $Command<ListLunaClientsCommandInput, ListLunaClientsCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: ListLunaClientsCommandInput;
    constructor(input: ListLunaClientsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLunaClientsCommandInput, ListLunaClientsCommandOutput>;
    private serialize;
    private deserialize;
}
