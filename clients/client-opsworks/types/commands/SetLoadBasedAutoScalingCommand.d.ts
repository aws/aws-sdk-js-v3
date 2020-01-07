import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { SetLoadBasedAutoScalingRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetLoadBasedAutoScalingCommandInput = SetLoadBasedAutoScalingRequest;
export declare type SetLoadBasedAutoScalingCommandOutput = __MetadataBearer;
export declare class SetLoadBasedAutoScalingCommand extends $Command<SetLoadBasedAutoScalingCommandInput, SetLoadBasedAutoScalingCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: SetLoadBasedAutoScalingCommandInput;
    constructor(input: SetLoadBasedAutoScalingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetLoadBasedAutoScalingCommandInput, SetLoadBasedAutoScalingCommandOutput>;
    private serialize;
    private deserialize;
}
