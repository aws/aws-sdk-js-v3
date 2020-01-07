import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DeregisterEcsClusterRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterEcsClusterCommandInput = DeregisterEcsClusterRequest;
export declare type DeregisterEcsClusterCommandOutput = __MetadataBearer;
export declare class DeregisterEcsClusterCommand extends $Command<DeregisterEcsClusterCommandInput, DeregisterEcsClusterCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DeregisterEcsClusterCommandInput;
    constructor(input: DeregisterEcsClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterEcsClusterCommandInput, DeregisterEcsClusterCommandOutput>;
    private serialize;
    private deserialize;
}
