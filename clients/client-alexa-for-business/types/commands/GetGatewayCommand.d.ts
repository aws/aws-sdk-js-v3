import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetGatewayRequest, GetGatewayResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetGatewayCommandInput = GetGatewayRequest;
export declare type GetGatewayCommandOutput = GetGatewayResponse & __MetadataBearer;
export declare class GetGatewayCommand extends $Command<GetGatewayCommandInput, GetGatewayCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: GetGatewayCommandInput;
    constructor(input: GetGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGatewayCommandInput, GetGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
