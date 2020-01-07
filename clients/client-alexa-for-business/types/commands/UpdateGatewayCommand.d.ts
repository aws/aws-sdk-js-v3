import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateGatewayRequest, UpdateGatewayResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateGatewayCommandInput = UpdateGatewayRequest;
export declare type UpdateGatewayCommandOutput = UpdateGatewayResponse & __MetadataBearer;
export declare class UpdateGatewayCommand extends $Command<UpdateGatewayCommandInput, UpdateGatewayCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: UpdateGatewayCommandInput;
    constructor(input: UpdateGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGatewayCommandInput, UpdateGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
