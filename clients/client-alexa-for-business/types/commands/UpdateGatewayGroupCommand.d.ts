import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateGatewayGroupRequest, UpdateGatewayGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateGatewayGroupCommandInput = UpdateGatewayGroupRequest;
export declare type UpdateGatewayGroupCommandOutput = UpdateGatewayGroupResponse & __MetadataBearer;
export declare class UpdateGatewayGroupCommand extends $Command<UpdateGatewayGroupCommandInput, UpdateGatewayGroupCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: UpdateGatewayGroupCommandInput;
    constructor(input: UpdateGatewayGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGatewayGroupCommandInput, UpdateGatewayGroupCommandOutput>;
    private serialize;
    private deserialize;
}
