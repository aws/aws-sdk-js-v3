import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListGatewaysRequest, ListGatewaysResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGatewaysCommandInput = ListGatewaysRequest;
export declare type ListGatewaysCommandOutput = ListGatewaysResponse & __MetadataBearer;
export declare class ListGatewaysCommand extends $Command<ListGatewaysCommandInput, ListGatewaysCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: ListGatewaysCommandInput;
    constructor(input: ListGatewaysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGatewaysCommandInput, ListGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
