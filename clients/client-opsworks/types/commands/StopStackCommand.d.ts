import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { StopStackRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopStackCommandInput = StopStackRequest;
export declare type StopStackCommandOutput = __MetadataBearer;
export declare class StopStackCommand extends $Command<StopStackCommandInput, StopStackCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: StopStackCommandInput;
    constructor(input: StopStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopStackCommandInput, StopStackCommandOutput>;
    private serialize;
    private deserialize;
}
