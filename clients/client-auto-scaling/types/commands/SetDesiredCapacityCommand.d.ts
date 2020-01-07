import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { SetDesiredCapacityType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetDesiredCapacityCommandInput = SetDesiredCapacityType;
export declare type SetDesiredCapacityCommandOutput = __MetadataBearer;
export declare class SetDesiredCapacityCommand extends $Command<SetDesiredCapacityCommandInput, SetDesiredCapacityCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: SetDesiredCapacityCommandInput;
    constructor(input: SetDesiredCapacityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetDesiredCapacityCommandInput, SetDesiredCapacityCommandOutput>;
    private serialize;
    private deserialize;
}
