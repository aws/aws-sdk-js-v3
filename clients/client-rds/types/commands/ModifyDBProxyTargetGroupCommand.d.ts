import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBProxyTargetGroupRequest, ModifyDBProxyTargetGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBProxyTargetGroupCommandInput = ModifyDBProxyTargetGroupRequest;
export declare type ModifyDBProxyTargetGroupCommandOutput = ModifyDBProxyTargetGroupResponse & __MetadataBearer;
export declare class ModifyDBProxyTargetGroupCommand extends $Command<ModifyDBProxyTargetGroupCommandInput, ModifyDBProxyTargetGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBProxyTargetGroupCommandInput;
    constructor(input: ModifyDBProxyTargetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBProxyTargetGroupCommandInput, ModifyDBProxyTargetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
