import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DeregisterRdsDbInstanceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterRdsDbInstanceCommandInput = DeregisterRdsDbInstanceRequest;
export declare type DeregisterRdsDbInstanceCommandOutput = __MetadataBearer;
export declare class DeregisterRdsDbInstanceCommand extends $Command<DeregisterRdsDbInstanceCommandInput, DeregisterRdsDbInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DeregisterRdsDbInstanceCommandInput;
    constructor(input: DeregisterRdsDbInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterRdsDbInstanceCommandInput, DeregisterRdsDbInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
