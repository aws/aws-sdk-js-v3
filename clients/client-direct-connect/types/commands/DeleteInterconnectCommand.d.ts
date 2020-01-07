import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteInterconnectRequest, DeleteInterconnectResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteInterconnectCommandInput = DeleteInterconnectRequest;
export declare type DeleteInterconnectCommandOutput = DeleteInterconnectResponse & __MetadataBearer;
export declare class DeleteInterconnectCommand extends $Command<DeleteInterconnectCommandInput, DeleteInterconnectCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DeleteInterconnectCommandInput;
    constructor(input: DeleteInterconnectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInterconnectCommandInput, DeleteInterconnectCommandOutput>;
    private serialize;
    private deserialize;
}
