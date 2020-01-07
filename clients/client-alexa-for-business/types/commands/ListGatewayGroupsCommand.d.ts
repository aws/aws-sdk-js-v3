import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListGatewayGroupsRequest, ListGatewayGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGatewayGroupsCommandInput = ListGatewayGroupsRequest;
export declare type ListGatewayGroupsCommandOutput = ListGatewayGroupsResponse & __MetadataBearer;
export declare class ListGatewayGroupsCommand extends $Command<ListGatewayGroupsCommandInput, ListGatewayGroupsCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: ListGatewayGroupsCommandInput;
    constructor(input: ListGatewayGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGatewayGroupsCommandInput, ListGatewayGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
