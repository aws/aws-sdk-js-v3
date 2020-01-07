import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { SetInstanceHealthQuery } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetInstanceHealthCommandInput = SetInstanceHealthQuery;
export declare type SetInstanceHealthCommandOutput = __MetadataBearer;
export declare class SetInstanceHealthCommand extends $Command<SetInstanceHealthCommandInput, SetInstanceHealthCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: SetInstanceHealthCommandInput;
    constructor(input: SetInstanceHealthCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetInstanceHealthCommandInput, SetInstanceHealthCommandOutput>;
    private serialize;
    private deserialize;
}
