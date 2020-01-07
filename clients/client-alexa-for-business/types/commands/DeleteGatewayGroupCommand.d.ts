import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteGatewayGroupRequest, DeleteGatewayGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteGatewayGroupCommandInput = DeleteGatewayGroupRequest;
export declare type DeleteGatewayGroupCommandOutput = DeleteGatewayGroupResponse & __MetadataBearer;
export declare class DeleteGatewayGroupCommand extends $Command<DeleteGatewayGroupCommandInput, DeleteGatewayGroupCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteGatewayGroupCommandInput;
    constructor(input: DeleteGatewayGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGatewayGroupCommandInput, DeleteGatewayGroupCommandOutput>;
    private serialize;
    private deserialize;
}
