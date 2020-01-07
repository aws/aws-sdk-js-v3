import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { SetTimeBasedAutoScalingRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetTimeBasedAutoScalingCommandInput = SetTimeBasedAutoScalingRequest;
export declare type SetTimeBasedAutoScalingCommandOutput = __MetadataBearer;
export declare class SetTimeBasedAutoScalingCommand extends $Command<SetTimeBasedAutoScalingCommandInput, SetTimeBasedAutoScalingCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: SetTimeBasedAutoScalingCommandInput;
    constructor(input: SetTimeBasedAutoScalingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetTimeBasedAutoScalingCommandInput, SetTimeBasedAutoScalingCommandOutput>;
    private serialize;
    private deserialize;
}
