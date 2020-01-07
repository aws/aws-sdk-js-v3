import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeregisterManagedInstanceRequest, DeregisterManagedInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterManagedInstanceCommandInput = DeregisterManagedInstanceRequest;
export declare type DeregisterManagedInstanceCommandOutput = DeregisterManagedInstanceResult & __MetadataBearer;
export declare class DeregisterManagedInstanceCommand extends $Command<DeregisterManagedInstanceCommandInput, DeregisterManagedInstanceCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeregisterManagedInstanceCommandInput;
    constructor(input: DeregisterManagedInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterManagedInstanceCommandInput, DeregisterManagedInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
