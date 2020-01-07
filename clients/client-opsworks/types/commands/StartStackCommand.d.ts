import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { StartStackRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartStackCommandInput = StartStackRequest;
export declare type StartStackCommandOutput = __MetadataBearer;
export declare class StartStackCommand extends $Command<StartStackCommandInput, StartStackCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: StartStackCommandInput;
    constructor(input: StartStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartStackCommandInput, StartStackCommandOutput>;
    private serialize;
    private deserialize;
}
