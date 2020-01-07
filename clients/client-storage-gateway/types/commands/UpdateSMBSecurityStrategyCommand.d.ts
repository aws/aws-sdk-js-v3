import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateSMBSecurityStrategyInput, UpdateSMBSecurityStrategyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSMBSecurityStrategyCommandInput = UpdateSMBSecurityStrategyInput;
export declare type UpdateSMBSecurityStrategyCommandOutput = UpdateSMBSecurityStrategyOutput & __MetadataBearer;
export declare class UpdateSMBSecurityStrategyCommand extends $Command<UpdateSMBSecurityStrategyCommandInput, UpdateSMBSecurityStrategyCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateSMBSecurityStrategyCommandInput;
    constructor(input: UpdateSMBSecurityStrategyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSMBSecurityStrategyCommandInput, UpdateSMBSecurityStrategyCommandOutput>;
    private serialize;
    private deserialize;
}
