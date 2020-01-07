import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListGatewaysInput, ListGatewaysOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGatewaysCommandInput = ListGatewaysInput;
export declare type ListGatewaysCommandOutput = ListGatewaysOutput & __MetadataBearer;
export declare class ListGatewaysCommand extends $Command<ListGatewaysCommandInput, ListGatewaysCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ListGatewaysCommandInput;
    constructor(input: ListGatewaysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGatewaysCommandInput, ListGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
