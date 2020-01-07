import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeleteSystemInstanceRequest, DeleteSystemInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSystemInstanceCommandInput = DeleteSystemInstanceRequest;
export declare type DeleteSystemInstanceCommandOutput = DeleteSystemInstanceResponse & __MetadataBearer;
export declare class DeleteSystemInstanceCommand extends $Command<DeleteSystemInstanceCommandInput, DeleteSystemInstanceCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DeleteSystemInstanceCommandInput;
    constructor(input: DeleteSystemInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSystemInstanceCommandInput, DeleteSystemInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
