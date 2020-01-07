import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { StopInstanceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopInstanceCommandInput = StopInstanceRequest;
export declare type StopInstanceCommandOutput = __MetadataBearer;
export declare class StopInstanceCommand extends $Command<StopInstanceCommandInput, StopInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: StopInstanceCommandInput;
    constructor(input: StopInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopInstanceCommandInput, StopInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
