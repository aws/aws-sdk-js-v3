import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeploySystemInstanceRequest, DeploySystemInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeploySystemInstanceCommandInput = DeploySystemInstanceRequest;
export declare type DeploySystemInstanceCommandOutput = DeploySystemInstanceResponse & __MetadataBearer;
export declare class DeploySystemInstanceCommand extends $Command<DeploySystemInstanceCommandInput, DeploySystemInstanceCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DeploySystemInstanceCommandInput;
    constructor(input: DeploySystemInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeploySystemInstanceCommandInput, DeploySystemInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
