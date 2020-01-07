import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ModifyClusterInput, ModifyClusterOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyClusterCommandInput = ModifyClusterInput;
export declare type ModifyClusterCommandOutput = ModifyClusterOutput & __MetadataBearer;
export declare class ModifyClusterCommand extends $Command<ModifyClusterCommandInput, ModifyClusterCommandOutput, EMRClientResolvedConfig> {
    readonly input: ModifyClusterCommandInput;
    constructor(input: ModifyClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterCommandInput, ModifyClusterCommandOutput>;
    private serialize;
    private deserialize;
}
