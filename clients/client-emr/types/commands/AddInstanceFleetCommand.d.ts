import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { AddInstanceFleetInput, AddInstanceFleetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddInstanceFleetCommandInput = AddInstanceFleetInput;
export declare type AddInstanceFleetCommandOutput = AddInstanceFleetOutput & __MetadataBearer;
export declare class AddInstanceFleetCommand extends $Command<AddInstanceFleetCommandInput, AddInstanceFleetCommandOutput, EMRClientResolvedConfig> {
    readonly input: AddInstanceFleetCommandInput;
    constructor(input: AddInstanceFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddInstanceFleetCommandInput, AddInstanceFleetCommandOutput>;
    private serialize;
    private deserialize;
}
