import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Lag, UpdateLagRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateLagCommandInput = UpdateLagRequest;
export declare type UpdateLagCommandOutput = Lag & __MetadataBearer;
export declare class UpdateLagCommand extends $Command<UpdateLagCommandInput, UpdateLagCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: UpdateLagCommandInput;
    constructor(input: UpdateLagCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLagCommandInput, UpdateLagCommandOutput>;
    private serialize;
    private deserialize;
}
