import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { StartInstanceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartInstanceCommandInput = StartInstanceRequest;
export declare type StartInstanceCommandOutput = __MetadataBearer;
export declare class StartInstanceCommand extends $Command<StartInstanceCommandInput, StartInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: StartInstanceCommandInput;
    constructor(input: StartInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartInstanceCommandInput, StartInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
