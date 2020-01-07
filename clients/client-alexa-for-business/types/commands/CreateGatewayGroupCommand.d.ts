import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateGatewayGroupRequest, CreateGatewayGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateGatewayGroupCommandInput = CreateGatewayGroupRequest;
export declare type CreateGatewayGroupCommandOutput = CreateGatewayGroupResponse & __MetadataBearer;
export declare class CreateGatewayGroupCommand extends $Command<CreateGatewayGroupCommandInput, CreateGatewayGroupCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: CreateGatewayGroupCommandInput;
    constructor(input: CreateGatewayGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGatewayGroupCommandInput, CreateGatewayGroupCommandOutput>;
    private serialize;
    private deserialize;
}
