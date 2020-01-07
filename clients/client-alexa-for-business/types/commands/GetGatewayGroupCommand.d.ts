import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetGatewayGroupRequest, GetGatewayGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetGatewayGroupCommandInput = GetGatewayGroupRequest;
export declare type GetGatewayGroupCommandOutput = GetGatewayGroupResponse & __MetadataBearer;
export declare class GetGatewayGroupCommand extends $Command<GetGatewayGroupCommandInput, GetGatewayGroupCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: GetGatewayGroupCommandInput;
    constructor(input: GetGatewayGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGatewayGroupCommandInput, GetGatewayGroupCommandOutput>;
    private serialize;
    private deserialize;
}
