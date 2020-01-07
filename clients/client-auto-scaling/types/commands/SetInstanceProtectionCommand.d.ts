import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { SetInstanceProtectionAnswer, SetInstanceProtectionQuery } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetInstanceProtectionCommandInput = SetInstanceProtectionQuery;
export declare type SetInstanceProtectionCommandOutput = SetInstanceProtectionAnswer & __MetadataBearer;
export declare class SetInstanceProtectionCommand extends $Command<SetInstanceProtectionCommandInput, SetInstanceProtectionCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: SetInstanceProtectionCommandInput;
    constructor(input: SetInstanceProtectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetInstanceProtectionCommandInput, SetInstanceProtectionCommandOutput>;
    private serialize;
    private deserialize;
}
